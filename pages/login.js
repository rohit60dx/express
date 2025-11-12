export function login() {
  return `<form action="/submit" method="post">
    <input type="text" placeholder="Enter Email" , name="email" />
    <br> <br>
    <input type="password" placeholder="Enter Password" , name="password" />
     <br> <br>
    <button>Submit</button>
  </form>`;
}