![Big Sur, California. There are clouds on the horizon...](/assets/big_sur.jpg)

If you're a web developer, you've probably heard of [React Hooks](https://reactjs.org/docs/hooks-intro.html). They're a new feature React 16.8 that
allows you to interact with React's lifecycle methods without having to use a [class component](https://reactjs.org/docs/react-component.html).

Ever since hooks were announced, React developers were eager to get their mits on them because they stroke this obsession right now 
that [functional programming](https://en.wikipedia.org/wiki/Functional_programming) is better than
[object-oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming). This is not to say that hooks aren't helpful. And let's be
honest, I was excited, too.

# Hooks: A Primer

Just like most UI frameworks, React has a concept of "controllers" with lifecycle methods you can loop into to do work:

```js
class FooBar extends React.Component {
	componentDidMount() { ... }

	componentWillUnmount() { ... }

	componentDidUpdate(prevProps) { ... }

	render() { ... }
}
```

React has this concept of `props`, which you can think of as arguments to a function. A component will call it's `render` lifecycle method
when it wants to draw itself. Usually `render` is called in two circumstances:

1. There were new `props`.
2. The `state` changed.

Oh right: React has this concept of `state`, which can be called up and set:

```js
class FooBar extends React.Component {
	state = {
		counter: 0
	};
	
	onCount = () => this.setState({ counter: this.state.counter + 1 });

	render() {
		return (
			<div onClick={this.onCount}>{this.state.counter}</div>
		);
	}
}
```

That state is scoped to that component only and that's it.

So what are hooks? They basically give you a way of writing components as functions while still allowing you to hook into lifecycle methods. (I see what you did there, Facebook...) This
component does the same thing as the one above:

```js
const FooBar = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div onClick={setCounter}>{counter}</div>
	);
};
```

Pretty, right? And oh so small!

Of course, we started using React hooks at work as soon as they became stable. And then the confusion set in:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A silly <a href="https://twitter.com/hashtag/reactjs?src=hash&amp;ref_src=twsrc%5Etfw">#reactjs</a> question: how do you choose between extracting logic into a pure function or into a hook?</p>&mdash; Jon (@jballands) <a href="https://twitter.com/jballands/status/1127589533086879744?ref_src=twsrc%5Etfw">May 12, 2019</a></blockquote>