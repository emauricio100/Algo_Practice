/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/
var findMedianSortedArrays = function(nums1, nums2) {
    const med = nums1.concat(nums2).sort((a,b) => {return a-b})
    const mid = med.length / 2
    if(med.length % 2) return med[Math.floor(mid)]
    if(med.length % 2 === 0) return (med[mid] + med[mid-1]) / 2
};