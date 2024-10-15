"use client";

export default function Home() {
  return (
    <div>
      <button
        onClick={() => {
          navigator.clipboard.writeText("http://localhost:8080/api/i/1").then(() => {
            alert('Copy clipboard successfully')
          });
        }}
        style={{ border: '1px solid red', padding: 10 }}
      >
        Click me
      </button>
    </div>
  );
}
