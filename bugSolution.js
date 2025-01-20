```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]); // Add 'count' to the dependency array

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
    console.log('Button clicked');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```