from prompt_toolkit import PromptSession
from prompt_toolkit.key_binding import KeyBindings
from prompt_toolkit.application import run_in_terminal
from prompt_toolkit.mouse_events import MouseEventType
import subprocess
import asyncio

# Create a PromptSession with mouse support
session = PromptSession(mouse_support=True)

# Key bindings (optional)
kb = KeyBindings()

@kb.add("c-c")
def _(event):
    event.app.exit()

def run_command(cmd):
    try:
        subprocess.run(cmd, shell=True)
    except Exception as e:
        print("Error:", e)

def main():
    print("🖱️ Welcome to Mouse-Enabled Bash Shell (Press Ctrl+C to Exit)")
    while True:
        try:
            command = session.prompt("👉 $ ", key_bindings=kb)

            async def run_command_async():
                await run_in_terminal(lambda: run_command(command))

            asyncio.run(run_command_async())

        except KeyboardInterrupt:
            continue
        except EOFError:
            break

if __name__ == "__main__":
    main()
