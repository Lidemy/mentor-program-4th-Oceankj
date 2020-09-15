<?php
function escape ($input){
  return htmlspecialchars($input,ENT_QUOTES);
};
function catch_code ($input){
  if(empty($input)){
    return false;
  }else{
    return $input;
  };
}
?>