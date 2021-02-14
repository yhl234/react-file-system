<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot](https://raw.githubusercontent.com/yhl234/react-file-system/master/images/screenshot.gif)

This is an simple file browser project with following features:

- Breadcrumb :
  - Shows current directory.
  - Each part of breadcrumb is a link to an folder.
- Files :
  - Fetches data from [server](https://github.com/yhl234/react-file-system-api) and displays fetched data.
  - Each item is clickable. Click it will update the breadcrumb and display items in the new directory.
- Browser's Go Back and Go Forward works as normal.
- Pasting url can go to the folder directly.

### Built With

- [Create React App](https://github.com/facebook/create-react-app)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material-Ui](https://material-ui.com/)

## Sample data

```js
let root = {
	type: "dir",
	children: {
		home: {
			type: "dir",
			children: {
				myname: {
					type: "dir",
					children: {
						"filea.txt": {
							type: "file",
						},
						"fileb.txt": {
							type: "file",
						},
						projects: {
							type: "dir",
							children: {
								mysupersecretproject: {
									type: "dir",
									children: {
										mysupersecretfile: {
											type: "file",
										},
									},
								},
							},
						},
					},
				},
			},
		},
	},
};
```
