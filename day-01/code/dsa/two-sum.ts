function twoSum(nums: number[], target: number): number[] {
    if(nums.length<2){
        return []
    }
    const seenNumbers:{[key:number]: number} = {};
    for(let i=0; i<nums.length; i++){
        const requiredNumber = target-nums[i];

        if(seenNumbers[requiredNumber] !== undefined){
            return [seenNumbers[requiredNumber], i]
        }

        seenNumbers[nums[i]] = i;
    }
    return []
};