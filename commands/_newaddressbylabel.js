/*CMD
  command: /newaddressbylabel
  help: Get newly generated address, and its unique(!) YOURS label.
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please input unique label
  keyboard: 
  aliases: 📎new address by label
CMD*/

Libs.BlockIO.Bitcoin.getNewAddress({ onSuccess: "/onnewaddress", onError: "/onerror", label: message } );
