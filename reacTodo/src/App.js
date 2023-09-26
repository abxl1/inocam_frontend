import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import WorkingList from "./components/WorkingList";

function App() {
	
	const [todo, setTodo] = useState([
		{
			id: 1,
			title: "투두 추가하기",
			content: "CSS 꾸미기",
			set: false,
		},
	]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const contentChangeHandler = (event) => {
		setContent(event.target.value);
	};

	const clickAddButtonHandler = () => {
		const newTodo = {
			id: todo.length + 1,
			title,
			content,
			set: false,
		};
		setTodo([...todo, newTodo]);
		setTitle("");
		setContent("");
	};

	const DoneTodoButton = id => { // 완료 버튼
		const updatedTodo = todo.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					set: true,
				};
			}
			return todo;
		});
		setTodo(updatedTodo);
	};

	const cancleTodoButton = id => { // 취소 버튼
		const cancleTodo = todo.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					set: false,
				};
			}
			return todo;
		});
		setTodo(cancleTodo);
	};

	const deleteUserHandler = id => {
		const deleteTodo = todo.filter((todo) => todo.id !== id);
		setTodo(deleteTodo);
	};

	const runningTodo = todo.filter((todo) => !todo.set);
	const doneTodo = todo.filter((todo) => todo.set);

	return (
		<div className='layout'>
			<Header />
			<Input
				title={title}
				titleChangeHandler={titleChangeHandler}
				content={content}
				contentChangeHandler={contentChangeHandler}
				clickAddButtonHandler={clickAddButtonHandler}
			/>

			<WorkingList // working
				title='Working...🔥'
				todo={runningTodo}
				deleteUserHandler={deleteUserHandler}
				TodoButton={DoneTodoButton}
				type={false}
			/>

			<WorkingList // done
				title='Done...🎉'
				todo={doneTodo}
				deleteUserHandler={deleteUserHandler}
				TodoButton={cancleTodoButton}
				type={true}
			/>
		</div>
	);
}
export default App;
