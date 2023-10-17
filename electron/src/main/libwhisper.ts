import {promisify} from "util"
import {spawn} from "child_process";
import fs from 'fs';

export async function* executeAndReturnLineGenerator(
    cmd: string,
    args: string[]
) {
    console.log(cmd, args)
    const cp = spawn(cmd, args);
    let currentLine = "";
    for await (const chunk of cp.stdout) {
        const chunkText = chunk.toString()
        if (chunk.includes("\n")) {
            for (const l of chunkText.trim().split("\n")) {
                console.log("line: " + l)
                if (l) {
                    yield l;
                }
            }
        } else {
            currentLine += chunk;
        }
    }
    let stderrItems = [];
    for await (const chunk of cp.stderr) {
        console.error("stderr chunk: " + chunk);
        stderrItems.push(chunk);
    }
    const exitCode = await new Promise((resolve, reject) => {
        cp.on("close", resolve);
    });

    if (exitCode) {
        yield undefined;
    }
};

function getCurrentDir() {
    return __dirname;
}

export async function TestWhisper(
    modelPath: string,
    wavPath: string,
) {
    const arrText = []
    for await (const line of executeAndReturnLineGenerator("/Users/twocucao/Workspace/01-Code/whisper/z2lab-whisper/native/mac/arm64/whisper", [
        `-m`,
        modelPath,
        `--language`,
        `chinese`,
        "--prompt",
        "以下是普通话的句子",
        `-f`,
        wavPath,
    ])) {
        fs.appendFile('/Users/twocucao/output.txt', line, (err) => {
            if (err) throw err;
            console.log('Content saved!');
        });
        arrText.push(line)
    }
    return arrText
}

