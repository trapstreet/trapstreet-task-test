# Trapstreet Task Test

A public, minimal Task Project for testing fixed-commit imports into Trapstreet.

一个用于验证 Trapstreet 固定版本导入的最小公开任务项目。

- One Case asks the agent to write `2 + 2` to `answer.txt` in its assigned output directory.
- The Judge compares the output with the supplied Input and returns 0 or 100.
- The Reporter returns the average of valid Case scores.
- No model calls or author environment-preparation scripts are used by the evaluators.

## Current SDK development prerequisite

`@trapstreet/sdk@0.1.0` is still local-only; it is **not published to npm**.
The lockfile deliberately resolves its exact version to `vendor/trapstreet-sdk-0.1.0.tgz`.
This SDK artifact is excluded from this public repository. Before installing or running
evaluators locally, copy the matching platform/SDK development tarball to that path,
then run `npm ci --ignore-scripts`.

目前 SDK 尚未发布。此仓库可用于静态导入验证；执行 Judge/Reporter 前，需要提供锁文件匹配的本地 SDK tarball。平台正式发布时再统一切换为 npm 精确版本。

The platform import validator uses its own pinned SDK and does not install project
dependencies or execute these evaluators. A successful import is not evidence that
Run execution has been implemented or that the SDK is available from npm.

Schema version: `2026.09.1`. Case IDs are assigned by the platform; `main` is only a directory name.
