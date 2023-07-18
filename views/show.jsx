const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
//  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
            and it
            {
                // this is a one line if/else statsment- JS ternary operator
                bread.hasGluten ? <span> does </span> : <span> does not </span>
            }
            have glutten
        </p>
        <img src={bread.image} alt={bread.name} />
        <a href={`/breads/${index}/edit`} >
            <button>Edit</button>
          </a>
      <form action={`/breads/${index}?_method=DELETE`} method='POST' >
        <input type='submit' value='DELETE' />
      </form>
      </Default>
    )
}

module.exports = Show