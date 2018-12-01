import { emojis } from "./fixture-emojis";

export const long = `
# This is an h1 tag
## This is an h2 tag
###### This is an \`<h6>\` tag

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b

http://github.com - automatic!
[GitHub](http://github.com)

As Kanye West said:

> We're living the future so
> the present is our past.

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

## Code

\`\`\`jsx{1,5-7}
export function Component() {
  // Some comment
  return (
    <div>
      <div attr="value" attr={value}>
        <div>Hello there</div>
      </div>
    </div>
  );
}
\`\`\`

## patternplate flavoured Markdown

### Video

[[grid]]
| [[grid-column | 1 - 7 ]]
| |
| | **Video Local**
| |
| | !(video:https://media.meetalva.io/video/website-01.mp4)
|
| [[grid-column | 7 - 13 ]]
| |
| | **Video Local with Settings**
| |
| | !(video:{ "controls": false, "muted": true, "autoplay": true, "playsinline": true, "loop": true }:https://media.meetalva.io/video/website-01.mp4)


[[details | External providers ]]
|
| ### Youtube
|
| !(youtube:https://www.youtube.com/embed/gZT13EKfZXg)
|
| ### Vimeo
|
| !(vimeo:https://vimeo.com/263660487)


### Conditional display

[[details | More Content ]]
| Some information you want to show conditionally
|
| > Blockquotes work
|
| * Lists
| * Work
| * To
|
| \`\`\`js
| console.log('As well as code blocks');
| \`\`\`


### Layout

[[grid]]
| [[grid-column | 1 - 4 ]]
| | ![](https://patternplate.github.io/media/logo/class-photo.svg)
|
| [[grid-column | 5 - 13 ]]
| | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


[[grid]]
| [[grid-column | 2 - 8 ]]
| | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
|
| [[grid-column | 9 - 12 ]]
| | ![](https://patternplate.github.io/media/logo/class-photo.svg)

### Info boxes

> :grey_question:
> A generic grey box to indicate emphasis

---

> :grey_question:
> ![](https://patternplate.github.io/media/logo/class-photo.svg)

---

> :grey_question:
>
> ** Can be combined freely with other patternplate-flavoured extensions**
>
> [[details | More Content inside ]]
> | Some information you want to show conditionally

---

> :information_source:
> A blue box emphasising relevant information [and a link](#some-link)

---

> :white_check_mark:
> A green box indicating something positive [and a link](#some-link)

---

> :warning:
> A yellow box indicating a warning / heads up

---

> :x:
> A red box that indicates something negative

## Emojis

[[details | Click for all available \`name\` - emoji pairs ]]
| ${emojis}

`;

export const short = `
## Headline

> Description

[Link](http://github.com)

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

`;
