package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.service.SaleService;

@RestController
@RequestMapping("/sales")
public class SaleController {

	@Autowired
	private SaleService service;

	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		return ResponseEntity.ok().body(
				service.findAll(pageable)
		);
	}
	
	@GetMapping("/total-sales")
	public ResponseEntity<List<SaleSumDTO>> amountGrouped() {
		return ResponseEntity.ok().body(
				service.amountGroupedBySeller()
		);
	}
	
	@GetMapping("/total-success")
	public ResponseEntity<List<SaleSuccessDTO>> successGrouped() {
		return ResponseEntity.ok().body(
				service.successGroupedBySeller()
		);
	}
}
