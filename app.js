import {resize_canvas, draw_courtlines, draw_players, } from './court.js';
import {Player} from './player.js';


export function main() {
    console.log("Main function called");



    // Get a reference to the canvas element
    // const canvas = document.getElementById('CourtCanvas');
    // const ctx = canvas.getContext('2d');

    //window.ResizeCanvas = resize_canvas;

    //resize_canvas();


    function draw() {
        let scaler = resize_canvas();
        draw_courtlines(scaler);
        draw_players(scaler);
        let requestId = requestAnimationFrame(draw); // Call draw function again
    }
    draw();
    //window.addEventListener('resize', resize_canvas);

}