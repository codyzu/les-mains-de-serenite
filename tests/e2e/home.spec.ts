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
    page.getByRole('heading', {
      name: 'Soin ponctuel : choisir le rituel juste',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Soin thérapeutique ou relaxant'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir les soins'})
  ).toHaveAttribute('href', '/soins/');
  await expect(page.getByText('Prendre le temps')).toBeVisible();
  await expect(page.getByText('S’accorder une vraie pause')).toBeVisible();
  await expect(
    page.getByText(
      'Un moment pour ralentir, écouter votre corps et retrouver une sensation de calme.'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Accompagnement : aller plus loin sur plusieurs séances',
    })
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
      'L’accompagnement associe drainage lymphatique, écoute du corps'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Découvrir les programmes'})
  ).toHaveAttribute('href', '/programmes/');
  await expect(
    page.getByRole('link', {name: 'Découvrir le programme', exact: true})
  ).toHaveAttribute('href', '/programmes/ventre-leger-jambes-legeres/');
  await expect(
    page.getByRole('link', {name: 'Découvrir la cure'})
  ).toHaveAttribute('href', '/programmes/cure-fusion/');
  await expect(
    page.locator('a[href="/soins/maderotherapie/"]').first()
  ).toHaveAttribute('href', '/soins/maderotherapie/');
  await expect(
    page.getByRole('heading', {name: 'Quel est votre besoin aujourd’hui ?'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Je souhaite un accompagnement'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Réserver un soin'}).first()
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
    page.getByRole('heading', {
      name: 'Single treatment: choose the right ritual',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Therapeutic or relaxing treatment',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Discover the treatments'})
  ).toHaveAttribute('href', '/en/massages/');
  await expect(page.getByText('Take your time')).toBeVisible();
  await expect(page.getByText('Allow yourself a real pause')).toBeVisible();
  await expect(
    page.getByText(
      'A moment to slow down, listen to your body, and return to a sense of calm.'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {
      name: 'Support: go further across several sessions',
    })
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'Light Belly & Light Legs Program'})
  ).toBeVisible();
  await expect(page.getByRole('heading', {name: 'Cure Fusion'})).toBeVisible();
  await expect(page.getByText('350 €').last()).toBeVisible();
  await expect(page.getByText('3 sessions', {exact: true})).toBeVisible();
  await expect(
    page.getByText(
      'The accompaniment combines lymphatic drainage, body awareness'
    )
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Discover the programs'})
  ).toHaveAttribute('href', '/en/programs/');
  await expect(
    page.getByRole('link', {name: 'Discover the program', exact: true})
  ).toHaveAttribute('href', '/en/programs/light-belly-light-legs/');
  await expect(
    page.getByRole('link', {name: 'Discover the package'})
  ).toHaveAttribute('href', '/en/programs/cure-fusion/');
  await expect(
    page.locator('a[href="/en/massages/maderotherapy/"]').first()
  ).toHaveAttribute('href', '/en/massages/maderotherapy/');
  await expect(
    page.getByRole('heading', {name: 'What do you need today?'})
  ).toBeVisible();
  await expect(
    page.getByRole('heading', {name: 'I want support'})
  ).toBeVisible();
  await expect(
    page.getByRole('link', {name: 'Book a treatment'}).first()
  ).toHaveAttribute('href', '/en/book');
});
