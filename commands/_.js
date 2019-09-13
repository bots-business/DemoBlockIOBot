/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(message.substring(0, 8)=="/archive"){
   let arr = message.split("/archive");
   let label = arr[1];
   Libs.BlockIO.Bitcoin.archiveAddresses(
      { onSuccess: "/onarchived", onError: "/onerror", labels:label }
   );
}
