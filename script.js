const rocks = [
	"granite",
	"obsidian",
	"quartz",
	"coal",
	"flint",
	"limestone",
	"slate",
	"amethyst",
	"cerium",
	"diamond",
	"tin",
	"basalt",
	"diorite",
	"gold",
	"titanium",
	"jade",
	"ruby",
	"pumice",
	"silicon",
	"gabbro",
	"silver",
	"iridium",
];

// # of rocks in the array
const length = rocks.length;

// sorting algorithm
for (let i = 0; i < length - 1; i++) {
  // does the current rock come after the next one alphabetically?
  if (rocks[i] > rocks[i + 1]) {
    const temp = rocks[i];
    // swap rock positions
    rocks[i] = rocks[i + 1];
    rocks[i + 1] = temp;
    // loop again to see if rocks are now alphabetized
    i = -1;
  }
}

alert(rocks);
