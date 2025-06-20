function newTpsPrompt() {
	promptInput(
		"Enter the new simulation Ticks Per Second (TPS) between 1 and 1000. This is how many updates per second the simulation will run.\n\nThe default is 30.\n\nThe current TPS is " + tps + ".",
		(r) => {
			var newtps = parseInt(r);
			if (r !== null) {
				if (isNaN(newtps) || newtps == "") {
					logMessage("You did Not enter a valid TPS.");
				}
				else if (newtps == 0) {
					logMessage("You did Not enter a valid TPS.");
					tps = 30;
				}
				else {
					tps = parseInt(newtps);
					if (isNaN(tps) || tps <= 0) {
						logMessage("You did not enter a valid TPS.");
						tps = 30;
					}
				}
				resetInterval(tps);
			}
			focusGame();
		},
		"Change TPS"
	);
}

runAfterLoad(() => {
	tpsPrompt = newTpsPrompt;
});
