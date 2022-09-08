# README

## About

In my effort to learn [Wails v2](https://wails.io) with react and Typescript, I am building a CPU usage reporting app. 
This is inspired by https://github.com/plutov/packagemain/tree/master/16-wails-desktop-app

I created two gauges in order to compare [Recharts](https://recharts.org/en-US) and [Victory](https://formidable.com/open-source/victory/)

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on http://localhost:34115. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.
