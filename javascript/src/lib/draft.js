/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (list1.length === 0) {
      return list2;
  }
  if (list2.length === 0) {
      return list1;
  }

  // merge two lists into one mixed list using merge sort technique

  let i = 0;
  // let arrAns = [];
  
  if (list1[i] > list2[i]) {
      // list1.pop();
      // list2.splice(i);
      let tempList2Value = list2[i];
      list2.splice(i);
      return [tempList2Value, ...mergeTwoLists[list1, list2]];
  } else {
      let tempList2Value = list1[i];
      list1.splice(i);
      return [tempList2Value, ...mergeTwoLists[list1, list2]];
  }
  
};