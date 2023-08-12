"use strict";
// import * as vscode from 'vscode';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// const playSound = () => {
//     const audio = new Audio('path/to/sound/file.mp3');      
//     audio.play();
// };
// export function activate(context: vscode.ExtensionContext) {
//     console.log('Keyboard Sound Extension is now active.');
//     let disposable = vscode.commands.registerCommand('extension.playSound', () => {         //plays sound command
//         playSound();
//     });
//     context.subscriptions.push(disposable);
//     vscode.window.onDidChangeTextEditorSelection(() => {    
//         playSound();
//     });
// }
// export function deactivate() {
//     console.log('Keyboard Sound Extension is now inactive.');
// }
// extension.ts
const vscode = __importStar(require("vscode"));
const playSound = () => {
    const audio = new Audio('/keyboard-sound.mp3');
    audio.play();
};
function activate(context) {
    console.log('Keyboard Sound Extension is now active.');
    let disposable = vscode.commands.registerCommand('extension.playSound', () => {
        playSound();
    });
    context.subscriptions.push(disposable);
    vscode.window.onDidChangeTextEditorSelection(() => {
        playSound();
    });
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
