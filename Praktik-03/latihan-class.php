<?php

function newline(){echo "<br>";}

class Animals
{
  private array $data = [];
  public function __construct()
  {

  }

  public function index()
  {
    print_r($this->data);
    newline();
  }

  public function store(string $newAnimal)
  {
    array_push($this->data, $newAnimal);
    echo "add ". $newAnimal . "";
    newline();
  }

  public function update(String $oldAnimal, String $newAnimal){
    echo "update " . $oldAnimal ." to ". $newAnimal ."";
    newline();
    $old_animal_index = array_search($oldAnimal, $this->data);
    $this->data[$old_animal_index] = $newAnimal;
  }
  public function destroy($animal){
    echo "delete ".$animal . "";
    newline();
    $animal_index = array_search($animal, $this->data);
    unset($this->data[$animal_index]);
  }
}

$animals = new Animals();
$animals->store("cat");
$animals->store("dog");
$animals->store("chicken");
$animals->index();
$animals->update("dog", "dinosaur");
$animals->index();
$animals->destroy("dinosaur");
$animals->index();
?>