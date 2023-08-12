
// import * as vscode from 'vscode';

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
import * as vscode from 'vscode';

const playSound = () => {
    const audio = new Audio( '/keyboard-sound.mp3');
    audio.play();
};

export function activate(context: vscode.ExtensionContext) {
    console.log('Keyboard Sound Extension is now active.');

    let disposable = vscode.commands.registerCommand('extension.playSound', () => {
        playSound();
    });

    context.subscriptions.push(disposable);

    vscode.window.onDidChangeTextEditorSelection(() => {
        playSound();
    });
}

export function deactivate() {}
