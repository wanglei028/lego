interface HelloProps{
  msg: string;
}
/* 
直接在组件函数参数中使用了解构赋值和类型注解 { msg }: HelloProps，
这是 Vue 3 配合 TypeScript 的推荐做法，既简洁又能够充分利用 TypeScript 的静态类型检查功能。
*/
const Hello = ({msg}: HelloProps)=>{
  return (
      <h1>{msg}</h1>
  )
}

// Hello.props=['msg']

export default Hello

/* 
这段代码展示了如何在 Vue 3 中使用 TypeScript 和 JSX 语法创建一个简单的组件。下面是对这段代码的逐行解析：

TypeScript Interface 定义 (HelloProps)
typescript
interface HelloProps{
  msg: string;
}
定义了一个名为 HelloProps 的 TypeScript 接口，该接口描述了组件接收的属性。这里它只有一个属性 msg，类型为 string。
这意味着任何使用此组件的地方都需要传递一个名为 msg 的字符串属性。

Vue 3 Function Component (Hello)
typescript
const Hello = (props: HelloProps)=>{...}
定义了一个名为 Hello 的函数组件，它接受一个符合 HelloProps 接口的对象作为参数 props。
这意味着 Vue 会自动将传给该组件的属性验证并绑定到 props 参数上。

JSX 返回值
typescript
return (
  <h1>{props.msg}</h1>
)
组件的主体部分，使用 JSX 语法返回一个 <h1> 标签，其中的内容是 props.msg，即从外部传入的消息字符串。
JSX 允许在模板中直接嵌入 JavaScript 表达式，这里 {props.msg} 就是一个嵌入的表达式。

Vue 2 风格的属性定义（非Vue 3推荐做法）
typescript
Hello.props=['msg']
这一行代码尝试以 Vue 2 的方式定义组件的 props，但在 Vue 3 中，
推荐直接在组件函数的参数中使用 TypeScript 类型注解来定义 props，
如上面的 props: HelloProps。因此，在实际的 Vue 3 + TypeScript 项目中，
这一行通常是不需要的，且可能会引起混淆或错误，因为 Vue 3 更倾向于使用 Composition API 和 Prop 类型注解来处理 props。

导出组件
typescript
export default Hello
最后，使用 export default 导出 Hello 组件，使得其他模块可以引入并使用这个组件。

总结来说，这段代码展示了一个使用 TypeScript 接口定义 props 类型、并通过函数组件形式实现的简单 Vue 3 组件。
需要注意的是，Vue 3 中推荐直接使用 TypeScript 类型注解来定义 props，而非使用 Vue 2 风格的 Component.props 配置。

*/