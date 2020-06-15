const { spawn } = require('child_process');

const warnings = [
    "WARNING: apt does not have a stable CLI interface. Use with caution in scripts.",
    "Error: No matching Packages to list"
]

function shouldIgnore(stderr) {
    return warnings.some(err => stderr.includes(err));
}

function spawnPromise(cmd, args) {
    return new Promise((resolve, error) => {
        let stdout_buffer = "";
        let stderr_buffer = "";
        let child = spawn(cmd, [...args]);

        child.stdout.setEncoding('utf8');
        child.stderr.setEncoding('utf8');


        child.stdout.on('data', (data) => {
            stdout_buffer += data;
        });

        child.stderr.on('data', (data) => {
            stderr_buffer += data;
        });

        child.on('close', (codes) => {
            if(
                stderr_buffer == "" ||
                shouldIgnore(stderr_buffer)
                ) resolve(stdout_buffer);
            else error(stderr_buffer)
        });
    });
};

module.exports = spawnPromise