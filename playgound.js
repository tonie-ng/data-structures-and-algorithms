const voted = {};

voted[1] = "victor";

function getvoted(name) {
  if (voted[name]) {
    console.log(`Kick out ${name}`);
  } else {
    console.log(`Allow ${name} to vote`);
  }
}

getvoted("victor");
