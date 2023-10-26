<?php

function newline()
{
  echo "<br>";
}

class Animals
{
  private array $animals = [];
  public function __construct()
  {

  }

  public function index()
  {
    print_r($this->animals);
    newline();
  }

  public function store(string $newAnimal)
  {
    array_push($this->animals, $newAnimal);
    echo "add " . $newAnimal . "";
    newline();
  }

  public function update(string $oldAnimal, string $newAnimal)
  {
    echo "update " . $oldAnimal . " to " . $newAnimal . "";
    newline();
    $old_animal_index = array_search($oldAnimal, $this->animals);
    if ($old_animal_index == false) {
      echo 'animal "' . $oldAnimal . '" not found';
      newline();
    }
    $this->animals[$old_animal_index] = $newAnimal;
  }
  public function destroy($animal)
  {
    echo "delete " . $animal . "";
    newline();
    $animal_index = array_search($animal, $this->animals);
    unset($this->animals[$animal_index]);
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