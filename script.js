const imgContainer = document.querySelector('.img-container')
const userInfo = document.querySelector('.user-info')
const button = document.querySelector('button')

const generateRandomUser = () => {
  fetch('https://randomuser.me/api/')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data?.results[0])
      const name =
        data?.results[0]?.name?.title +
        ' ' +
        data?.results[0]?.name?.first +
        ' ' +
        data?.results[0]?.name?.last

      const email = data?.results[0]?.email
      const cellNo = data?.results[0]?.cell
      const location = data?.results[0]?.location?.country
      const age = data?.results[0]?.dob?.age
      const pic = data?.results[0]?.picture?.large

      imgContainer.innerHTML = `<img src=${pic} />`
      userInfo.innerHTML = `<p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${cellNo}</p
      <p>Location: ${location}</p>
      <p> Age: ${age}</p>`
    })
}

button.addEventListener('click', generateRandomUser)
window.addEventListener('load', generateRandomUser)
