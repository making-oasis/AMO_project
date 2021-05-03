//import Entry from './entry'

//APIつながっていないので一時退避
//{entries.map((e) => (
//  <div key={e.id} className="py-2">
//    <Entry id={e.id} title={e.title} content={e.content} />
//  </div>
// ))}

function Entries({ entries }) {
  if (entries) {
    return (
      <div>

      </div>
    )
  } else {
    return null
  }
}

export default Entries
