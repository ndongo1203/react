const App = () => {
    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState('');

    const addTodo = () => {
        if (todo) {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>ToDoListe React.js</h1>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="Ajouter une tâche"
            />
            <button onClick={addTodo}>Ajouter</button>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}{' '}
                        <button onClick={() => removeTodo(index)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('TodoList'));