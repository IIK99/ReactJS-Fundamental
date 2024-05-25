import React from "react";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";

// function App() {
//   return (
//     <div>
//       <Header />
//       <main id="core-concepts">
//         <h2>Core Concepts</h2>
//         <ul>
//           <CoreConcepts
//             title={CORE_CONCEPTS[0].title}
//             description={CORE_CONCEPTS[0].description}
//             image={CORE_CONCEPTS[0].image}
//           />
//           <CoreConcepts {...CORE_CONCEPTS[1]} />
//           <CoreConcepts {...CORE_CONCEPTS[2]} />
//           <CoreConcepts {...CORE_CONCEPTS[3]} />
//         </ul>
//       </main>
//     </div>
//   );
// }

// export default App;

// atau bisa juga dengan map
function App() {
  return (
    <div>
      <Header />
      <main id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((concept, index) => (
            <CoreConcepts
              key={index}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
