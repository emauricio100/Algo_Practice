/*
Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.
*/

var maximumGap = function(nums) {
    const sorted = nums.sort((a,b) => {return a-b})
    console.log(sorted)
    const max = []
    for(let i = 0; i < sorted.length; i++){
            max.push(sorted[i+1] - sorted[i])   
    }
    max.pop()
    return sorted.length < 2 ? 0: Math.max(...max)
};