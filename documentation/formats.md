# Formats

The pattern concept hinges on the notion of files being [transformed](./transforms.md) from
sources to results. In order to specify which file should be transformed which way, the
`pattern.formats` configuration is used.

Each specified format that is found for a pattern is available as a tab on pattern view of the Living Styleguide interface – you can select between viewing the source of the file or the transformed results. If a demo and index files is present you can view each file.

| Warning   |             |
|:---------:|:------------|
|:warning:  | The format configuration will be expanded in the near future |

## Specify a format

To specify a format, you'll have to add a key to the `patterns.formats` configuration. The key is the extension this format should apply to (sans `.`).

```js
// configuration/patternplate-server/patterns.js
{
	formats: {
		css: { // this will apply to `{index,demo}.css` files
			name: 'Styling', // name to use in Living Styleguide interface
			transforms: ['postcss'] // apply postcss when transforming. assumes a configured postcss transform
		}
	}
}
```

For information on how to configure the referenced transforms, read [Transforms](./transforms.md).
