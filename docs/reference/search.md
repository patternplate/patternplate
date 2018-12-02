---
tags:
  - Reference
options:
  order: 16
---

# Reference: Search

> :woman_student: **Level**: Beginner

`patternplate` provides a powerful search engine on top of your component library.

Access the search panel by clicking on the :mag_right: icon in the bottom
right corner of the interface. 

Search may also be invoked by the shortcut `Control + Option + Space`.

## Fuzzy search

By default patternplate will perform a fuzzy search over all fields and content that accounts for minor typos. 

E.g. `buton` will yield a result list that contains the **Button** pattern.

## Structured search

Structured search complements fuzzy search with more fine grained control.

You can enter in a format of `[key]=[value]`, e.g. `version=1.0.0` has the
key `version` and a value `1.0.0`. 

### flag

> with a flag of `value`

`flag` queries are useful to find groups of patterns that
do / do not satisfy stability requirements.

| Value | Order | Description | 
|:------|:-----:|:---
| `alpha`  | 0 | **Default**. First draft
| `beta`   | 1 | Reviews conducted
| `rc`     | 2 | API consent reached
| `stable` | 3 | API has stabilized
| `deprecated` | 0 | Flagged for removal. Do not use.

When using a quantitive operator (`>`, `>=`, `<`, `<=`) the
order is used to determine what larger/smaller than means 
according to

```
 alpha (0) = deprecated (0) < alpha (1) < beta (1) < rc (2) < stable (3)
```

**Examples**

* [flag=beta](?search-enabled=true&search=flag=beta) - with a flag of `beta`
* [flag>=beta](?search-enabled=true&search=flag>=beta) - with a flag greater than `beta` (`rc`, `stable`)


### is

> with a type of `value`

`is` queries are useful to limit other queries to either `pattern` or `doc` items.

| Value | Description | 
|:------|:---
| `pattern`  | Software componens matched via `config.entry`
| `doc`   | Documenation items matched via `config.docs`


**Examples**

* [is=doc](?search-enabled=true&search=is=doc)
* [is!=pattern](?search-enabled=true&search=is!=pattern)

### has

> has `property` of `value`

`has` queries find items that have defined qualities
attached to them.

| Value | Description | 
|:------|:---
| `docs`  | Documentation attched via a colocated `md` file
| `flag`  | Stability flag specified via manifest `JSON`
| `version` | Semantic version specified via manifest `JSON`
| `description` | Short description provided via manifest `JSON`
| `displayName` | Display name for patternplate configured via manifest `JSON`
| `tags` | A non-empty list of tags is attached via manifest `JSON`

**Examples**

* [has=docs](?search-enabled=true&search=has=docs)
* [has!=flag](?search-enabled=true&search=has!=flag)
* [has=version](?search-enabled=true&search=has=version)

### tags

> has a tag of `value`

`tags` queries match items if they have a tag of `value` attached.

**Examples**

* [tags=Interaction](?search-enabled=true&search=tags=Interaction)
* [tags=Primitives](?search-enabled=true&search=tags=Primitives)
* [tags!=Widgets](?search-enabled=true&search=tags!=Widgets)

### version

> has a version satisfying `value`

`version` queries find items that match given `semver` ranges

**Examples**

* [version<1.0.0](?search-enabled=true&search=version<1.0.0)
* [version=1.0.0](?search-enabled=true&search=version=1.0.0)
* [version>=0.1](?search-enabled=true&search=version>=0.1)

## path

> is located at `path`

Supports the special match operator: `*=` for glob matching

**Examples**

* [path=docs/why.md](?search-enabled=true&search=path=docs/why.md)
* [path*=components/next-generation/*](?search-enabled=true&search=path*=components/next-generation/*)
* [path=docs/*w*](?search-enabled=true&search=path=docs/*w*)

## Logical operators

Search queries can be filtered `AND`, expanded `OR` and grouped `()` with logical operators.

**Examples**

* [flag=beta AND tags!=Widget](?search-enabled=true&search=flag%3Dbeta%20AND%20tags!%3DWidget)

  with a `flag` of beta if not tagged as `Widget`

* [(version<=1 OR flag!=stable) AND is=pattern](?search-enabled=true&search=version%3C%3D1%20OR%20flag!%3Dstable%20is=pattern)
  
  with version greator or equal `1.0.0` **or** a flag other than stable, if it is a pattern.
