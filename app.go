package main

import (
	"context"
	"math"
	"time"

	"github.com/shirou/gopsutil/cpu"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx      context.Context
	CpuUsage *CPUUsage
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}

}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
	a.CpuUsage = &CPUUsage{}
	go func() {
		for {
			a.CpuUsage.updateCPUUsage()
			runtime.EventsEmit(ctx, "cpu_usage", a.CpuUsage)
			time.Sleep(1 * time.Second)
		}
	}()

}

// CPUUsage .
type CPUUsage struct {
	Average int `json:"avg"`
}

// updateCPUUsage .
func (usage *CPUUsage) updateCPUUsage() {
	percent, err := cpu.Percent(1*time.Second, false)
	if err != nil {
		panic(err)
	}

	usage.Average = int(math.Round(percent[0]))
}
