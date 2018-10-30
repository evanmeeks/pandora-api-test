                                                                                                                 |

## Debugging in the Editor

**This feature is currently only supported by [Visual Studio Code](https://code.visualstudio.com) and [WebStorm](https://www.jetbrains.com/webstorm/).**

Visual Studio Code and WebStorm support debugging out of the box with Create React App. This enables you as a developer to write and debug your React code without leaving the editor, and most importantly it enables you to have a continuous development workflow, where context switching is minimal, as you don’t have to switch between tools.

### Visual Studio Code

You would need to have the latest version of [VS Code](https://code.visualstudio.com) and VS Code [Chrome Debugger Extension](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) installed.

Then add the block below to your `launch.json` file and put it inside the `.vscode` folder in your app’s root directory.

```json
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Chrome",
			"type": "chrome",
			"request": "launch",
			"url": "http://localhost:3000",
			"webRoot": "${workspaceRoot}/src",
			"sourceMapPathOverrides": {
				"webpack:///src/*": "${webRoot}/*"
			}
		}
	]
}
```
