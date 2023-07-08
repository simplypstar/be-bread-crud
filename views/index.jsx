const React = require('react')
const Default = require('./layouts/default')

function Index ({ breads }) {
   const breadDisplay = breads.map((bread, i) => {
        return(
            <li key={i}>
                <a href={`/breads/${i}`}>
                    {bread.name}
                </a>
            </li>
        )
   })
    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {breadDisplay}
        </ul>
      </Default>
    )
}

module.exports = Index