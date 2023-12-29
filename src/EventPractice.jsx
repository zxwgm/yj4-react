export default function EventPractice() {
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="message" placeholder="anything"
      onChange={(e) => {
        console.log(e.target.value)
      }}
       />
    </div>
  )
}