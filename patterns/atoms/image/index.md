This pattern is a showcase for static asset usage.
Currently developers have to place static assets in
`/static/<path>`.

The assets subsequently can be referenced via `/api/static/<path>`.
This requires the `build-interface` job to rewrite all static asset
paths subsequently.

| :warning: | Please note |
|:---------:|:------------|
|           | This behaviour **will** change in a future version  |
