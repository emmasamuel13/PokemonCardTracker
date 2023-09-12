package com.example.pokemoncardtracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class PokemonCardTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(PokemonCardTrackerApplication.class, args);
	}

	@PostMapping("/add-a-card")
	public void addCard(@RequestBody String pokemonName) {

	}

}
