```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here: the function is called only once on mount
    console.log('Component mounted');
  }, []); // Empty dependency array means this runs only once

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