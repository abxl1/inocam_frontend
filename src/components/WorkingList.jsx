import React from "react";

function WorkingList({title, todo, deleteUserHandler, TodoButton, type}) {
	return (
		<div className='listContainer'>
			<h2>{title}</h2>
			<div className='runBox'>
				<div className='todoCard'>
					{todo.map((list) => {
						return (
							<div key={list.id} className='todoThing'>
								<div className='todoContent'>
									<h3>{list.title}</h3>
									<p>{list.content}</p>
									<div className='buttonSet'>
										<button onClick={() => deleteUserHandler(list.id)} className='todoDeleteButton'>
											삭제
										</button>
										<button onClick={() => TodoButton(list.id)} className='todoDoneButton'>{type ? "취소" : "완료"}
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default WorkingList;
