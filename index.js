function superbowlWin(superbowls) {
    const winningYear = superbowls.find(superbowl => superbowl.result === "W");
    return winningYear ? winningYear.year : undefined;
}