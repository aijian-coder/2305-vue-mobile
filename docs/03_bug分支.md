## 你正在 dev 分支上干活，这时生产有bug需要紧急修改，你该如何操作

1. 先将 dev 上的代码做个 存储。使用 git stash。（当前代码没有达到提交的标准）
2. 切换到 master 分支，创建一个 bug 修复分支。
3. 在该分支上复现bug、研究bug、解决bug。
4. 提交测试
5. 将 bug 修复分支合并到 主干 master 分支。并构建上线。
6. 切回到 dev 分支上，使用 git stash pop 将之前存着代码给放出来，继续编写