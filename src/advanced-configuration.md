You can adjust various development and production settings by setting environment variables in your shell or with [.env](adding-custom-environment-variables.md#adding-development-environment-variables-in-env).

| Variable          | Development | Production | Usage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :---------------- | :---------: | :--------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                   |
| REACT_EDITOR      |   ✅ Used   | 🚫 Ignored | When an app crashes in development, you will see an error overlay with clickable stack trace. When you click on it, Create React App will try to determine the editor you are using based on currently running processes, and open the relevant source file. You can [send a pull request to detect your editor of choice](https://github.com/facebook/create-react-app/issues/2636). Setting this environment variable overrides the automatic detection. If you do it, make sure your systems [PATH](<<https://en.wikipedia.org/wiki/PATH_(variable)>>) environment variable points to your editor’s bin folder. You can also set it to `none` to disable it completely. |
| REACT_EDITOR=code |   ✅ Used   | 🚫 Ignored | Add code below to ~/.zshrc or .bashrc file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                   |             |            | export PATH=$PATH:/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                   |             |            | export REACT_EDITOR=code                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

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
