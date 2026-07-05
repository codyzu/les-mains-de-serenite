import {expect, test} from './fixtures';

test('French homepage renders the main business content and booking CTA', async ({
  page,
}) => {
  await page.goto('/');

  await expect(page).toHaveTitle(
    'Les Mains de Sérénité | Massage bien-être à Annecy pour femmes'
  );
  await expect(
    page.getByRole('heading', {name: 'Les Mains de Sérénité'}).first()
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Massages proposés'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Massage anti-douleur ou relaxant'})
  ).toBeVisible();
  await expect(
    page.getByText(
      'Également adapté aux femmes enceintes à partir de la fin du premier trimestre'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Programmes d’accompagnement'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Programme Ventre Léger & Jambes Légères',
    })
  ).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Cure Fusion'})).toBeVisible();
  await expect(page.getByText('350 €').last()).toBeVisible();
  await expect(page.getByText('3 séances', {exact: true})).toBeVisible();
  await expect(
    page.getByText(
      'Un accompagnement conçu pour retrouver une sensation de légèreté, de tonicité et de bien-être durable'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir le programme'})
  ).toHaveAttribute('href', '/programmes/ventre-leger-jambes-legeres/');
  await expect(
    page.getByRole('link', {name: 'Découvrir la cure'})
  ).toHaveAttribute('href', '/programmes/cure-fusion/');
  await expect(
    page.getByRole('link', {name: 'Découvrir'}).first()
  ).toHaveAttribute('href', '/massages/maderotherapie/');
  await expect(
    page.getByRole('link', {name: 'Réserver un massage'}).first()
  ).toHaveAttribute('href', '/reserver');
});

test('English homepage renders localized content and booking CTA', async ({
  page,
}) => {
  await page.goto('/en/');

  await expect(page).toHaveTitle(
    'Women’s Wellness Massage in Annecy | Les Mains de Sérénité'
  );
  await expect(
    page.getByRole('heading', {name: 'Les Mains de Sérénité'}).first()
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Available massages'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Tension relief or relaxation massage',
    })
  ).toBeVisible();
  await expect(
    page.getByText('Also suitable during pregnancy from the end')
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Support programs'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Light Belly & Light Legs Program'})
  ).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Cure Fusion'})).toBeVisible();
  await expect(page.getByText('350 €').last()).toBeVisible();
  await expect(page.getByText('3 sessions', {exact: true})).toBeVisible();
  await expect(
    page.getByText(
      'A guided accompaniment designed to restore a lasting feeling of lightness'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Discover the program'})
  ).toHaveAttribute('href', '/en/programs/light-belly-light-legs/');
  await expect(
    page.getByRole('link', {name: 'Discover the package'})
  ).toHaveAttribute('href', '/en/programs/cure-fusion/');
  await expect(
    page.getByRole('link', {name: 'Discover'}).first()
  ).toHaveAttribute('href', '/en/massages/maderotherapy/');
  await expect(
    page.getByRole('link', {name: 'Book a massage'}).first()
  ).toHaveAttribute('href', '/en/book');
});
