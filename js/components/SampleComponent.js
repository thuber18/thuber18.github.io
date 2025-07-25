// Sample React component
const e = React.createElement;

function SampleComponent() {
  return e('div', null, 'Hello from React!');
}

const domContainer = document.getElementById('react-root');
if (domContainer) {
  ReactDOM.createRoot(domContainer).render(e(SampleComponent));
} 