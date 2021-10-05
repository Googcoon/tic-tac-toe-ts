//variables
import Html5Websocket from 'html5-websocket';
import ReconnectingWebSocket from 'reconnecting-websocket';
import r from 'raylib'
import * as rpc from "./rpc"
import {Render} from './render'

const options = {WebSocket: Html5Websocket}
const { Rectangle } = r


const windowType = {
	MAIN: "In Main Menu",
	LOBBY: "In Lobby",
	SPECTATING: "Spectating",
	GAME: "In Game"
}
globalThis.currentWindow = windowType.MAIN
run()

async function run (){
	r.SetConfigFlags(r.FLAG_WINDOW_RESIZABLE)
	r.InitWindow(0, 0, "Tic Tac Toe - Main Menu")
	r.MaximizeWindow()
	r.SetWindowIcon(r.LoadImage("assets/display.png"))
	r.SetExitKey(0)
	r.SetTargetFPS(60)

	await rpc.DisplayRPC(globalThis.currentWindow, "Playing Tic Tac Toe", "Private Alpha", null)
	await rpc.DisplayRPC("hi", "Playing Tic Tac Toe", "Private Alpha", null)
	const board = new Render(r)
	while (!r.WindowShouldClose()) {
		if (!r.IsWindowMinimized && r.IsWindowResized){}
		let playBounds = new Rectangle(board.play.x, board.play.y, board.play.width, board.play.height)
		if (!r.CheckCollisionPointRec(r.GetMousePosition(), playBounds) || !r.IsMouseButtonDown(0) && globalThis.currentWindow == windowType.MAIN) {    
			board.render(1, 1, 'play')   
		} else {
			globalThis.currentWindow = windowType.LOBBY
			await rpc.DisplayRPC(globalThis.currentWindow, "Playing Tic Tac Toe", "Private Alpha", null)
		}
		r.BeginDrawing();
		r.ClearBackground(r.ORANGE)
		r.EndDrawing()
	}
}
