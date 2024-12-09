function drawRace(indices: number[], length: number): string {
  // Create array to store each lane
  const lanes: string[] = []
  
  // Process each index to create a lane
  indices.forEach((position, laneNumber) => {
    // Create base lane filled with snow
    let lane = '~'.repeat(length)
    
    // Calculate reindeer position
    let reindeerPos = position
    if (position < 0) {
      // If negative, count from the end
      reindeerPos = length + position
    }
    
    // Add reindeer if position is valid (not 0 and within bounds)
    if (position !== 0 && reindeerPos >= 0 && reindeerPos < length) {
      lane = lane.substring(0, reindeerPos) + 'r' + lane.substring(reindeerPos + 1)
    }
    
    // Add lane number and spaces for isometric view - reversed padding
    lane = ' '.repeat(indices.length - 1 - laneNumber) + lane + ' /' + (laneNumber + 1)
    lanes.push(lane)
  })
  
  // Join all lanes with newlines
  return lanes.join('\n')
}

// Export for testing
export default drawRace
