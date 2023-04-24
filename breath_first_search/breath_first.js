const graph = {
  you: ["alice", "bob", "victor"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "monny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};

function person_is_seller(name) {
  return name.charAt(name.length - 1) === "m";
}

function search(name) {
  const searchQueue = [];
  searchQueue.push(...graph[name]);
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (searched.includes(person)) {
      continue;
    }

    if (person_is_seller(person)) {
      console.log(`${person} is a mango seller!`);
      return true;
    } else {
      console.log(`${person} is not a mango seller`);
      const connections = graph[person];
      if (Array.isArray(connections)) {
        searchQueue.push(...connections);
      }
      searched.push(person);
    }
  }

  console.log("No mango sellers found!");
  return false;
}

search("you");
