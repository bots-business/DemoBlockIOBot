/*CMD
  command: /transfer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.BlockIO.Bitcoin.withdrawFromLabels(
    { to_addresses:"3KyRZdjJCpHjHfnjaELvrDpNAxUE3D1NK4",
     from_labels:"default",
     amounts:0.0002,  // see pin in Block.io Settings
     pin: "hsdcgdcg38u34444444444444",
     onSuccess: "/onwithdraw", onError: "/onerror", }
);
